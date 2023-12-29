import AltLayout from "../layouts/altLayout";
// import { format } from "date-fns";
export default function Insights() {
  // You can receive the selectedStartDate and selectedEndDate as props here
  const YourComponent = ({ selectedstartdate, selectedenddate }) => {
    // Your component logic using selectedStartDate and selectedEndDate
    return (
      <div>
        <p>
          Start Date:{" "}
          {selectedstartdate !== null ? (
            selectedstartdate.toString()
          ) : (
            <span>test</span>
          )}
        </p>
        <p>
          Start Date:{" "}
          {selectedenddate !== null ? (
            selectedenddate.toString()
          ) : (
            <span>test</span>
          )}
        </p>
      </div>
    );
  };

  return (
    <AltLayout title="Morning Insight">
      {/* Pass your custom component with the received props */}
      <YourComponent />
      <p>Other content in Insights component</p>
    </AltLayout>
  );
}
