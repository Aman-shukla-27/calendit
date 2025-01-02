# Calendar Application for Communication Tracking

This Calendar Application helps companies track and manage communication with other organizations. It allows administrators to configure communication parameters, and users can visualize, manage, and log interactions efficiently. The application is built with React and deployed on Netlify.

---

## Features

### Admin Module
- **Company Management**: Add, edit, and delete companies with details like name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
- **Communication Method Management**: Define available communication methods with attributes like name, description, sequence, and mandatory flag.

### User Module
- **Dashboard**:
  - View a grid of companies with columns for company name, last five communications, and next scheduled communication.
  - Color-coded highlights for overdue (red) and due (yellow) communications.
  - Hover tooltips to display notes for completed communications.
- **Communication Action**: Log new communications, select communication type, date, and add notes.
- **Notifications**: Display overdue and today’s communications in separate grids with a badge showing counts.
- **Calendar View**: Visualize past and upcoming communications interactively.

### Reporting and Analytics Module
- Communication frequency report.
- Engagement effectiveness dashboard.
- Overdue communication trends.
- Downloadable reports in PDF or CSV.
- Real-time activity log.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- A code editor like VS Code.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

---

## Deployment Instructions

This application is deployed on Netlify. To deploy your own version:

1. Create a Netlify account and link it to your GitHub repository.
2. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Deploy the application.

The application will be available at your Netlify-provided URL.

---

## Application Functionality

1. **Admin Features**:
   - Manage companies and communication methods.
2. **User Features**:
   - View and log communications.
   - Receive notifications for due and overdue tasks.
   - Use a calendar to track communication schedules.
3. **Analytics Module**:
   - Generate and download reports.
   - View activity trends and engagement metrics.

---

## Known Limitations

- **Customization**: Limited customization of communication methods.
- **Offline Mode**: Application requires an active internet connection.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

## License

This project is licensed under the MIT License.

---
