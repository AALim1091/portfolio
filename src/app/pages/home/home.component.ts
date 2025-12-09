import { Component } from '@angular/core';
import { UnsubscribeComponent } from '../../components/unsubscribe.component';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent extends UnsubscribeComponent {

  data;
  constructor() {
    super();

    this.data = {
    name: "Aaron Lim",
    professionalProfile: "Software Engineer & previous Technician with 9+ years of experience in Information Technology. I currently hold knowledge in Computer Engineering, Web development, Microsoft Data Mgmt. & Analytics, and Amazon Cloud Development.",
    objective: "To obtain a challenging, but rewarding position in the field of Software Engineering & Development where my skills and knowledge are resourceful, while providing further opportunity for development and growth.",
    education: [
      {
        degree: "Bachelor of Science",
        major: "Computer Engineering",
        year: "2020",
        school: "California State University San Bernardino",
        location: "San Bernardino, CA"
      },
      {
        degree: "Associate of Science",
        major: "Computer Science",
        year: "2016",
        school: "Mount San Jacinto College",
        location: "Menifee, CA"
      }
    ],
    certifications: [
      "Google Ads Search Certification - 2025",
      "AWS DevOps Engineer Professional – 2021",
      "AWS Developer Associate - 2021",
      "AWS Database Specialty - 2021",
      "AWS Cloud Practitioner - 2021",
      "MCSE: Data Mgmt. & Analytics - 2020",
      "Comptia A+ Technician - 2017"
    ],
    experience: [
      {
        position: "Software Engineer .Net",
        company: "Swarco McCain Inc",
        location: "Vista, CA",
        startDate: "11/2022",
        endDate: "Current",
        responsibilities: [
          "Design, code, and test new software implementations for traffic management using .Net Framework (Fullstack).",
          "Collaborate with cross-cultural teams (U.S. / Mexico / Europe) to define, design, and produce new product features.",
          "Write technical documentation for software applications.",
          "Participate in code reviews and provide constructive feedback.",
          "Debug and resolve software defects to ensure optimal performance.",
          "Collaborate with product owner and consumers to understand and implement project requirements correctly.",
          "Develop and maintain reusable, efficient, and reliable code."
        ]
      },
      {
        position: "I.T. Support Technician",
        company: "Pechanga Resort & Casino",
        location: "Temecula, CA",
        startDate: "12/2016",
        endDate: "11/2022",
        responsibilities: [
          "Troubleshoot, install, and maintain user hardware, software, and peripherals.",
          "Install and debug new software, ensuring licensing compliance.",
          "Perform routine performance monitoring of systems.",
          "Assist with troubleshooting network, server, application, and system issues.",
          "Enforce I.T. procedures and standards.",
          "Create and manage user accounts."
        ]
      }
    ],
    projects: [
      {
        title: "Keycloak SSO Authentication Flow",
        description: "Implemented Keycloak SSO with themes, login flows, and integration with WPF apps.",
        company: "Swarco McCain"
      },
      {
        title: ".Net 7 + gRPC Migration",
        description: "Migrated company services from .Net Framework 4.8 to .Net 7 using gRPC.",
        company: "Swarco McCain"
      }
    ],
    skills: {
      languages: ["C#", "Typescript", "Javascript", "SQL", "HTML", "CSS", "Python", "C++"],
      frameworks: [".NET", "Angular", "WPF", "Blazor", "Vue", "React"],
      operatingSystems: ["Windows", "Mac", "Linux"],
      applications: ["Visual Studio", "GitHub", "SQL Server", "Postman", "Azure DevOps"]
    }
  };
}


}
