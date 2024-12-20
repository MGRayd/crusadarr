Crusadarr

![Crusadarr Logo](./src/assets/logo.png)

Overview

Crusadarr is a web application designed to support Warhammer 40K players in managing their Crusade games. It allows players to track essential gameplay elements like unit kills, deaths, and agendas, manage command and round points, view and reference Crusade and House rules, and access PDFs for missions from Leviathan and custom games. It’s an all-in-one resource for tracking missions, points, and resources to streamline the tabletop experience.

Features

- Unit Tracking: Track unit kills, deaths, and agendas.
- Command Points: Manage command points for single and two-player games.
- Round Points: Track round points and painted bonuses.
- Rules Reference: View Crusade and House rules.
- Mission PDFs: Access and view mission PDFs.
- Data Export: Export game data to PDF.

Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/MGRayd/crusadarr.git
    cd crusadarr
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    VITE_API_KEY=your_google_api_key
    VITE_GOOGLE_DRIVE_API_KEY=your_google_drive_api_key
    ```

Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Thanks to Wahapedia for providing faction rules.
Special thanks to the Warhammer 40K community for their support and feedback.
Contact
For any inquiries, please contact Mark