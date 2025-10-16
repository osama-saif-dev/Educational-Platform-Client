import InstrctourProfileContent from "@/components/InstrctourProfileContent/InstrctourProfileContent";
interface IParams {
    params: Promise<{ id: string }> 
}
export default async function InstrctourProfile({ params }: IParams) {
    const { id } = await params;
  return (
    <div className="my-10">
        <InstrctourProfileContent id={id}/>
    </div>
  )
}
