# 🎓 Campus Connect

A campus issue management web application that allows students to submit their **complaints** and **concerns**, and enables administrators to **track, manage, and resolve** them efficiently.

## 🚀 Features

- 🔐 **Authentication** using Firebase (Student & Admin roles)
- 📝 **Students** can:
  - Submit complaints or concerns with categories and descriptions
  - Receive email notifications when:
    * Admin has viewed their submission
    * Admin has resolved their submission
  
- 🛠️ **Admins** can:
  - View all complaints and concerns
  - Send mail personally to the student about the status of the complaint
  - Delete issues
  - View dashboard statistics (e.g., total complaints and total concerns)
    
- 💾 **Real-time database** powered by Firebase Firestore
- 💻 **Responsive UI** with Tailwind CSS

## 🌐 Website Live in - https://campus-buddy-f672f.web.app/

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Authentication & Database:** Firebase (Auth & Firestore)
- Email Notification system using EmailJS
(Automatically sends a custom message to students when status is updated)

## 📸 Images

### Home Page
<img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/601cd33c-5c72-4547-9e43-58d2869e8a20" />

### Student Login 
<img width="1919" height="893" alt="image" src="https://github.com/user-attachments/assets/addd81a0-7445-4762-8bcd-ae6cd5b405bd" />

### Student Register
<img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/17ef5a14-d19d-4a04-a3ad-c1cf75b4e038" />

### Complaint Form
<img width="1919" height="894" alt="image" src="https://github.com/user-attachments/assets/08978f8b-0102-455e-a707-bd62d704c3f8" />
<img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/8f627ba2-c822-4794-80b1-492ce96474f7" />

### Concern Form
<img width="1919" height="897" alt="image" src="https://github.com/user-attachments/assets/ba548d84-5e18-418e-8b32-9f45624c28d0" />

### Admin Login
<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/59513cdd-6f55-495b-8ac3-493091d09fd0" />

### Admin Dashboard (Complaints)
<img width="1918" height="896" alt="image" src="https://github.com/user-attachments/assets/a5fc6b8e-5e81-46b9-986e-168e78e441a7" />

### Admin Dashboard (Concern)
<img width="1919" height="895" alt="image" src="https://github.com/user-attachments/assets/28649c50-c636-40d5-86d7-97ef5d9afe2b" />

### Mail (Viewed)
<img width="1919" height="897" alt="image" src="https://github.com/user-attachments/assets/e7054ed5-0b2c-4023-96e4-d134cb794391" />

### Mail (Resolved)
<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/9d389293-699d-4908-a3e2-6f14ce32cf59" />

## 🔧 Installation

```bash
git clone https://github.com/your-username/campus-connect.git
cd campus-connect
npm install
npm run dev

