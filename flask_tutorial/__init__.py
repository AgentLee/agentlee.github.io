from flask import Flask

app = Flask(__name__)

@app.route('/flask_tutorial/')
def homepage():
    return "Ball is life"

if __name__ == "__main__":
    app.run()


