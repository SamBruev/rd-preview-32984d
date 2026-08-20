#!/bin/bash
# ============================================================
# Red Deck — публикация превью на GitHub Pages
#
# Двойной щелчок в Finder. Если macOS ругается на неизвестного
# разработчика: правый клик → «Открыть» → ещё раз «Открыть».
#
# Что скрипт делает сам:
#   1) показывает, КАКАЯ сборка лежит в папке (дата и заголовок) —
#      чтобы не отправить старую, пока Яндекс.Диск ещё тянет новую;
#   2) отправляет её на GitHub;
#   3) ЖДЁТ и ПРОВЕРЯЕТ, что живой сайт действительно обновился, —
#      и говорит об этом прямо, без «вроде должно работать».
# ============================================================
cd "$(dirname "$0")" || exit 1

REPO_NAME="rd-preview-32984d"
SITE_URL="https://sambruev.github.io/$REPO_NAME/"

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo ""
echo "  Red Deck — публикация превью"
echo "  ============================"
echo ""

# --- 0. Какая сборка лежит в папке ---
if [ -f build-stamp.txt ]; then
  BUILD_ID=$(sed -n '2p' build-stamp.txt)
  echo "  В папке лежит сборка:"
  sed 's/^/    /' build-stamp.txt
  # возраст штампа: старше 6 часов — вероятно, синк ещё не докатил свежую
  if [ -n "$(find build-stamp.txt -mmin +360 2>/dev/null)" ]; then
    echo ""
    echo "  ⚠ Штампу больше шести часов. Если правки делались только что,"
    echo "    Яндекс.Диск мог ещё не дотянуть свежие файлы — проверьте"
    echo "    значок синхронизации в строке меню и запустите скрипт снова."
  fi
else
  BUILD_ID=""
  echo "  ⚠ Файла build-stamp.txt нет — сборка старая или не докачалась."
  echo "    Можно продолжить, но проверка обновления будет недоступна."
fi
echo ""

# --- 1. Git ---
if ! command -v git >/dev/null 2>&1; then
  echo "  Нет Git. Выполните в Терминале:  xcode-select --install"
  read -r -p "  Enter — закрыть"; exit 1
fi

# --- 2. Свежий репозиторий ---
# Папка живёт в Яндекс.Диске, синхронизация оставляет залипшие .lock —
# историю не бережём, она здесь не нужна.
echo "  Готовлю репозиторий..."
rm -rf .git 2>/dev/null
git init -q -b main
git config user.email "sambruev@gmail.com"
git config user.name "Sam Bruev"
git add -A
if ! git commit -q -m "Red Deck: превью сайта"; then
  echo "  Коммит не создался — мешает Яндекс.Диск."
  echo "  Скопируйте эту папку на Рабочий стол и запустите файл оттуда."
  read -r -p "  Enter — закрыть"; exit 1
fi
N_FILES=$(git ls-files | wc -l | tr -d ' ')
echo "  Коммит создан: $N_FILES файлов."
echo ""

# --- 3. GitHub CLI ---
if ! command -v gh >/dev/null 2>&1; then
  echo "  Не хватает GitHub CLI."
  if command -v brew >/dev/null 2>&1; then
    echo "  Homebrew найден. Могу поставить gh прямо сейчас (~1 минута)."
  else
    echo "  Homebrew тоже нет: поставлю сначала его (3–5 минут, спросит пароль Мака)."
  fi
  read -r -p "  Установить и продолжить? (y/n) " doinst
  if [ "$doinst" != "y" ]; then
    echo ""
    echo "  Тогда вручную: github.com/new → имя $REPO_NAME → Public → Create,"
    echo "  затем здесь:  git remote add origin https://github.com/ЛОГИН/$REPO_NAME.git"
    echo "                git push --force -u origin main"
    read -r -p "  Enter — закрыть"; exit 0
  fi
  if ! command -v brew >/dev/null 2>&1; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" || {
      echo "  Homebrew не установился."; read -r -p "  Enter — закрыть"; exit 1; }
    export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
  fi
  brew install gh || { echo "  gh не установился."; read -r -p "  Enter — закрыть"; exit 1; }
fi

# --- 4. Авторизация ---
if ! gh auth status >/dev/null 2>&1; then
  echo ""
  echo "  Нужно войти в GitHub — сейчас откроется браузер."
  echo "  Выбирайте: GitHub.com → HTTPS → Login with a web browser."
  read -r -p "  Enter — начать вход"
  gh auth login || { echo "  Вход не выполнен."; read -r -p "  Enter — закрыть"; exit 1; }
fi

# --- 5. Публикация ---
OWNER=$(gh api user --jq .login 2>/dev/null)
if gh repo view "$OWNER/$REPO_NAME" >/dev/null 2>&1; then
  MODE="update"
  echo ""
  echo "  Репозиторий $OWNER/$REPO_NAME уже есть — будет перезаписан"
  echo "  этой сборкой. Старая версия исчезнет, это и есть цель."
else
  MODE="create"
  echo ""
  echo "  Репозиторий будет ПУБЛИЧНЫМ (иначе Pages не работает на"
  echo "  бесплатном аккаунте). Индексация закрыта noindex и robots.txt."
fi
echo ""
read -r -p "  Публикуем? (y/n) " ok
if [ "$ok" != "y" ]; then
  echo "  Отменено, ничего не отправлено."
  read -r -p "  Enter — закрыть"; exit 0
fi

if [ "$MODE" = "update" ]; then
  git remote remove origin 2>/dev/null
  git remote add origin "https://github.com/$OWNER/$REPO_NAME.git"
  if ! git push --force -u origin main; then
    echo ""
    echo "  Отправить не удалось. Проверьте вход:  gh auth status"
    read -r -p "  Enter — закрыть"; exit 1
  fi
elif ! gh repo create "$REPO_NAME" --public --source=. --remote=origin --push; then
  echo ""
  echo "  Не получилось: скорее всего имя занято — поменяйте REPO_NAME."
  read -r -p "  Enter — закрыть"; exit 1
fi

gh api -X POST "repos/{owner}/$REPO_NAME/pages" \
   -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
|| gh api -X PUT "repos/{owner}/$REPO_NAME/pages" \
   -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
|| echo "  Pages не включились сами — Settings → Pages → main → / (root)."

echo ""
echo "  Отправлено. GitHub собирает сайт — обычно 1–2 минуты."

# --- 6. Проверка, что живой сайт обновился ---
if [ -n "$BUILD_ID" ]; then
  echo "  Проверяю обновление (ищу метку $BUILD_ID)..."
  UPDATED=""
  for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
    sleep 15
    if curl -sf --max-time 15 "${SITE_URL}?nocache=$i" | grep -q "$BUILD_ID"; then
      UPDATED="yes"; break
    fi
    printf "  ...ещё собирается (%d/12)\n" "$i"
  done
  echo ""
  if [ "$UPDATED" = "yes" ]; then
    echo "  ✅ ГОТОВО: живой сайт отдаёт именно эту сборку."
  else
    echo "  ⚠ За три минуты метка на сайте не появилась."
    echo "    Обычно это долгая сборка Pages — проверьте через пару минут."
    echo "    В браузере обновляйте с очисткой кеша: Cmd+Shift+R."
  fi
else
  echo "  Проверка пропущена: не было штампа сборки."
fi

echo ""
echo "  Адрес:  $SITE_URL"
printf "%s" "$SITE_URL" | pbcopy 2>/dev/null && echo "  (скопирован в буфер обмена)"
echo ""
read -r -p "  Enter — закрыть"
