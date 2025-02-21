instal:#первое клонировании репозитория (или после удаления node_modules)
	npm ci

brain-games:#запуск игры без глобальной установки.
	node bin/brain-games.js

publish:
	npm publish --dry-run
	