import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { useEffect } from "react"

// useEffect(()=>{

// },[])
console.log(import.meta.env.BACKEND_URL);
const fetchTocicCenters = async () => {
  // try {
  //   const response = await axios.get("/api/projects");
  //   console.log(response.data);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
};
const invoices = [
  {
    TOCICCenterName: "SPMVV, Tirupati",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "CTAE Udaipur",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "University Of Madras",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "GSBTM Gandhinagar",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "CSIR-CMERI Durgapur",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "IIT Kanpur",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "NAL Banglore",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "NEIST Jorhat",
    CenterHead:  "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "Gujrat",
    CenterHead:  "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "CSIR-CGCRI",
    CenterHead:  "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
  {
    TOCICCenterName: "IIT Guwahati",
    CenterHead: "XYZ",
    ContactDetails: "98xxxxxx01",
    Location: "INDIA",
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>All TOCIC CENTER</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">TOCIC CENTER</TableHead>
          <TableHead>CenterHead</TableHead>
          <TableHead>Contact Details</TableHead>
          <TableHead className="text-right">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.TOCICCenterName}</TableCell>
            <TableCell>{invoice.CenterHead}</TableCell>
            <TableCell>{invoice.ContactDetails}</TableCell>
            <TableCell className="text-right">{invoice.Location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
