import MessageCard from './MessageCard';

const RecentMessages = () => {
  return (
    <div className="h-[264px] bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col gap-4">
      <MessageCard
        name="Guy Hawkins"
        message="How can I return package?"
        status="Pending"
        time="13:20"
        avatar="/avatar1.jpg"
      />
      <MessageCard
        name="Jerome Bell"
        message="Questions about the product"
        status="Pending"
        time="7:00"
        avatar="/avatar2.jpg"
      />
      <MessageCard
        name="Jenny Wilson"
        message="Discount Code"
        status="Answered"
        time="10:20"
        avatar="/avatar3.jpg"
      />
    </div>
  );
};

export default RecentMessages;