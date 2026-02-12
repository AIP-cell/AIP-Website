import AddFinancialReportPage from "@/app/(admin)/_shared/components/financial-report/AddPage";
export const dynamic = "force-dynamic";
const AddReport: React.FC = () => {
  return <AddFinancialReportPage popperPlacement="bottom-start" />;
};

export default AddReport;
