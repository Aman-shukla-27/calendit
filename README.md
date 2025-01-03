# calendit
A Calendar application for communication tracking and a centralized platform to log past interactions, plan future communications, and manage the frequency of engagement based on predefined schedules.

Features-

Admin module:

  •	Company Management:
  
       •	Add, edit, and delete companies with details such as name, location, LinkedIn profile, email addresses, phone numbers, and additional comments.
       
       •	Set communication periodicity for scheduled follow-ups.

  •	Communication Method Management:

     •	Define and customize communication methods with attributes like name, description, sequence, and mandatory status.
     
     o	Default methods include:
     1.	LinkedIn Post
     2.	LinkedIn Message
     3.	Email
     4.	Phone Call
     5.	Other


User Module:

  •	Dashboard:


    •	View companies, last five communications, and the next scheduled communication.
  
    •	Color-coded highlights:
  
             •	Red: Overdue communications
  
             •	Yellow: Tasks due today
  
    •	Interactive hover tooltips for additional communication details.


  •	Notifications:

    •	Separate grids for overdue and today’s communications.
    
    •	Notification icon with badge counts.


  •	Calendar View:

    •	Visualize past and upcoming communications.

  •	Log Communication:

    •	Modal to record communication type, date, and additional notes.

Analytics Module:

  •	Insights and Visualizations:
  
    •	Communication Frequency: Bar and pie charts displaying the usage of various communication methods.
    
    •	Engagement Metrics: Analyze response rates and effectiveness of communication methods.

    •	Overdue Trends: Trendlines highlighting overdue communications over time.

  •	Filters:

    •	Filter data by date range.

  •	Export Options:
  
    •	Download insights CSV for offline sharing.


Technologies Used:

  •	Frontend: React.js
  
  •	State Management: Local storage and session storage
  
  •	Styling: TailwindCSS
  
  •	Charts: Recharts for dynamic and interactive data visualizations

  • Deployment: Vercel

Live Demo:

  • Access the deployed application: https://calendit.vercel.app/

User Testing:

  • User testing has been successfully conducted to validate:

   • Usability: Ensured the application is intuitive and easy to navigate for both admins and users.
   
   • Performance: Confirmed smooth operation with minimal delays during data handling and rendering.
   
   • Accuracy: Verified proper handling of overdue, due, and completed communications.
   
   • Feedback from testing was positive, and the application is now ready for deployment and broader usage.

Usage:

  • Admin Access
  
      • Configure companies and communication methods through the admin module.
      
  • User Access
      
      • Track overdue, due, and completed communications via the dashboard.
      
      • Log new communications using the interactive modal.
      
      • Use the calendar to manage scheduled interactions.
      
  • Analytics
      
      • Navigate to the "Analytics" section.
      
      • Select filters to customize the charts.
      
      • Export charts as PDF or CSV for reporting.

Known Issues:

  • Limited scalability for large datasets in local/session storage.
  
  • Recharts visualizations may not fully render on extremely small screens.


Future Enhancements:

  • Add support for persistent backend storage.
  
  • Implement user authentication and role-based access control.
  
  • Expand analytics to include predictive insights.
  
