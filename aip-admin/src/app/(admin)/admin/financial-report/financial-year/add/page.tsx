import AddFinancialYearPage from "@/app/(admin)/_shared/components/financial-year/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddFinancialYearPage popperPlacement="bottom-start" />;
};

export default Add;
