import { useParams } from "react-router-dom";
import moment from "moment";
import { JOURNAL_ACCOUNTS } from "../../utils/dummyData"; // Asumsikan data jurnal ada di sini

const JournalDetailPage = () => {
  const { journalId } = useParams();
  const journal = JOURNAL_ACCOUNTS.find(j => j.journalId === journalId);

  if (!journal) {
    return <div>Journal not found</div>;
  }

  return (
    <div>
      <h1>Journal Detail - {journal.journalId}</h1>
      <p>Date: {moment(journal.date).format("DD MMM YY")}</p>
      <p>Amount: ${journal.amount}</p>
      <p>Description: {journal.description}</p>
      {/* Tambahkan komponen lain sesuai kebutuhan */}
    </div>
  );
};

export default JournalDetailPage;
