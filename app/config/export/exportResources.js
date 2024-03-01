import { FaFilePdf, FaFileCsv } from "react-icons/fa6"
import { baseUrl} from "@lib/constants";

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
        url: baseUrl + "/admin/export/pdf/assignments/"
      },
      {
        type: "csv",
        icon: <FaFileCsv />,
        url: baseUrl + "/admin/export/csv/assignments/"
      }
    ]
  },
  laboratories: {
    title: "laboratoires",
    data: [
      {
        type: "pdf",
        icon: <FaFilePdf />,
        url: baseUrl + "/admin/export/pdf/labDetails/"
      },
      {
        type: "csv",
        icon: <FaFileCsv />,
        url: baseUrl + "/admin/export/csv/labDetails/"
      }
    ]
  }
}