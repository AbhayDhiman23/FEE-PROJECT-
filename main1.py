from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder="templates")
app.config['UPLOAD_FOLDER'] = 'uploads'  
app.debug = True  

@app.route("/")
def index():
    return render_template("Home_PAge.html")

@app.route('/upload', methods=['POST'])
def upload():
    if 'templates' not in request.files:
        return redirect(request.url)

    files = request.files.getlist('templates')
    concatenated_content = ""

    for file in files:
        content = file.read().decode('utf-8')
        concatenated_content += content

    return render_template("http://127.0.0.1/motivation.html", content=concatenated_content)

if __name__ == '__main__':
    app.run("0.0.0.0", port=80)
