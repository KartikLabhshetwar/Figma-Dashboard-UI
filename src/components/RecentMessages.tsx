import MessageCard from './MessageCard';

const RecentMessages = () => {
  return (
    <div className="bg-white rounded-[20px] divide-y divide-gray-50">
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