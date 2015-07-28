from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
	return "hello world"

@app.route("/user")
def blah():
	return "user hello"

if __name__ == "__main__":
	app.run(debug = True)