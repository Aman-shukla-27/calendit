# Calendar Application for Communication Tracking

A React-based application designed to streamline and manage communications with companies. This tool helps maintain consistent follow-ups, track interaction history, and analyze engagement patterns through a user-friendly interface and visual analytics.

---

## Features

### Admin Module
- **Company Management**: Add, edit, and delete companies with details such as name, location, LinkedIn profile, email addresses, phone numbers, and additional comments.
  Set communication periodicity for scheduled follow-ups.
- **Communication Method Management**: Define and customize communication methods with attributes like name, description, sequence, and mandatory status.
- **Default methods include**:
    - LinkedIn Post
    - LinkedIn Message
    - Email
    - Phone Call
    - Other

### User Module
- **Dashboard**:
  - View companies, last five communications, and the next scheduled communication.
  - Color-coded highlights:
      - Red: Overdue communications
      - Yellow: Tasks due today
  - Interactive hover tooltips for additional communication details.

- **Notifications**:
  - Separate grids for overdue and today’s communications.
  - Notification icon with badge counts.
- **Calendar View**:
  - Visualize past and upcoming communications.
- **Log Communication**:
  - Modal to record communication type, date, and additional notes.

### Analytics Module
- Insights and Visualizations:
  
  - **Communication Frequency**: Bar and pie charts displaying the usage of various communication methods.
  - **Engagement Metrics**: Analyze response rates and effectiveness of communication methods.
  - **Overdue Trends**: Trendlines highlighting overdue communications over time.
- Filters:
  - Filter data by company, communication type, and date range.
- Export Options:
  - Download insights as CSV for offline sharing.

-

### Technologies Used

  - **Frontend**: React.js
  - **State Management**: Local storage and session storage
  - **Styling**: TailwindCSS
  - **Charts**: Recharts for dynamic and interactive data visualizations
  - **Deployment**: Vercel

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

## Live Demo:

  - **Access the deployed application**: https://calendit.vercel.app/

---

## Deployment Instructions

This application is deployed on Vercel. To deploy your own version:

1. Create a Vercel account and link it to your GitHub repository.
2. Configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Deploy the application.

The application will be available at your Vercel-provided URL.

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

### User Testing
  - User testing has been successfully conducted to validate:

    - **Usability**: Ensured the application is intuitive and easy to navigate for both admins and users.
    - **Performance**: Confirmed smooth operation with minimal delays during data handling and rendering.
    - **Accuracy**: Verified proper handling of overdue, due, and completed communications.
      
  - Feedback from testing was positive, and the application is now ready for broader usage.

---

### Usage
- **Admin Access**
  - Configure companies and communication methods through the admin module.
- **User Access**
  - Track overdue, due, and completed communications via the dashboard.
  - Log new communications using the interactive modal.
  - Use the calendar to manage scheduled interactions.
-**Analytics**
  - Navigate to the "Analytics" section.
  - Select filters to customize the charts.
  - Export charts CSV for reporting.

## Known Limitations

- **Customization**: Limited customization of communication methods.
- **Offline Mode**: Application requires an active internet connection.

---

## Known Issues

- Limited scalability for large datasets in local/session storage.
- Recharts visualizations may not fully render on extremely small screens.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

## License

This project is licensed under the MIT License.

---
