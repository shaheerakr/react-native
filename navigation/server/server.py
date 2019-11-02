from flask import Flask,request

app = Flask(__name__)

@app.route('/',methods = ['GET','POST'])
def home():
    data = request.get_json()
    return data
@app.route('/hello')
def hello():
    return 'hello'

if __name__ == '__main__' : 
    app.run(debug=True, port=5000)
