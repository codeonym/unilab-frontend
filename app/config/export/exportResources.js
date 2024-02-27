import { FaFilePdf, FaFileCsv } from "react-icons/fa6"

export const exportResources = {
  consumables: {
    title: "consommables",
    data: [
      {
        type: "pdf",
        icon: <FaFilePdf />,
        url: "localhost:3000/assets/images/logo.png"
      },
      {
        type: "csv",
        icon: <FaFileCsv />,
        url: "localhost:3000/assets/images/logo.png"
      }
    ]
  },
  materials: {
    title: "matériels",
    data: [
      {
        type: "pdf",
        icon: <FaFilePdf />,
        url: "localhost:3000/assets/images/logo.png"
      },
      {
        type: "csv",
        icon: <FaFileCsv />,
        url: "localhost:3000/assets/images/logo.png"
      }
    ]
  },
  laboratories: {
    title: "laboratoires",
    data: [
      {
        type: "pdf",
        icon: <FaFilePdf />,
        url: "localhost:3000/assets/images/logo.png"
      },
      {
        type: "csv",
        icon: <FaFileCsv />,
        url: "localhost:3000/assets/images/logo.png"
      }
    ]
  }
}