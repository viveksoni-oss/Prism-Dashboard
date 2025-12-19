import { ArrowUpDown, MoreHorizontal, Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Helper for status badge colors
const getStatusColor = (status) => {
  switch (status) {
    case "APPROVED":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "REJECTED":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    case "PENDING_APPROVAL":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

export const columns = [
  {
    accessorKey: "id",
    header: "App ID",
    cell: ({ row }) => (
      <div className=" font-mono text-xs w-20 text-muted-foreground truncate">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Project Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium ml-4">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "domain",
    header: "Domain",
  },
  {
    accessorKey: "fundsSanctioned",
    header: () => <div className="text-left ">Amount (₹)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("fundsSanctioned"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge className={`rounded-md border-0  ${getStatusColor(status)}`}>
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(application.id)}
            >
              Copy App ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" /> View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" /> Edit Status
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
