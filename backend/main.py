from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class contractForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.get("/")
def home():
    return {"message": "The backend is running successfully!"}

@app.post("/contact")
def contact(form_data: contractForm):
    print("New contact form submission:")
    print("Name:", form_data.name)
    print("Email:", form_data.email)
    print("Subject:", form_data.subject)
    print("Message:", form_data.message)

    return {"message": "Form submitted successfully!"}

