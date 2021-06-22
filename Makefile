build:
	npm start

run-server:
	export FLASK_APP=app.py; \
	export FLASK_ENV=development; \
	flask run

launch:
	make build \
	make run-server