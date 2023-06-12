import React, { useState } from 'react';
import { Stack, TextField, PrimaryButton, ProgressIndicator } from '@fluentui/react';

const CreateClubForm = () => {
  const [step, setStep] = useState(0);
  const [clubData, setClubData] = useState({
    clubInfo: {
      image: '',
      name: '',
      description: '',
      budget: '',
      supervisor: '',
    },
    committeeMembers: {
      president: '',
      vicePresident: '',
      secretary: '',
      treasurer: '',
    },
    documents: [],
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setClubData((prevClubData) => ({
      ...prevClubData,
      [field]: value,
    }));
  };

  const renderFormStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            {/* Club Info Step */}
            <TextField
              label="Club Image"
              value={clubData.clubInfo.image}
              onChange={(event, value) => handleChange('clubInfo.image', value)}
            />
            <TextField
              label="Club Name"
              value={clubData.clubInfo.name}
              onChange={(event, value) => handleChange('clubInfo.name', value)}
            />
            <TextField
              label="Club Description"
              value={clubData.clubInfo.description}
              onChange={(event, value) => handleChange('clubInfo.description', value)}
              multiline
              autoAdjustHeight
            />
            <TextField
              label="Club Budget"
              value={clubData.clubInfo.budget}
              onChange={(event, value) => handleChange('clubInfo.budget', value)}
            />
            <TextField
              label="Club Supervisor"
              value={clubData.clubInfo.supervisor}
              onChange={(event, value) => handleChange('clubInfo.supervisor', value)}
            />
            {/* Additional fields for step 1 */}
            <PrimaryButton text="Next" onClick={handleNextStep} className='w-48 self-end   bg-[#073567] rounded-lg'/>
          </>
        );
      case 1:
        return (
          <>
            {/* Committee Members Step */}
            <p>Enter the email addresses in the following fields:</p>
            <TextField
              label="President"
              value={clubData.committeeMembers.president}
              onChange={(event, value) => handleChange('committeeMembers.president', value)}
            />
            <TextField
              label="Vice President"
              value={clubData.committeeMembers.vicePresident}
              onChange={(event, value) =>
                handleChange('committeeMembers.vicePresident', value)
              }
            />
            <TextField
              label="Secretary"
              value={clubData.committeeMembers.secretary}
              onChange={(event, value) => handleChange('committeeMembers.secretary', value)}
            />
            <TextField
              label="Treasurer"
              value={clubData.committeeMembers.treasurer}
              onChange={(event, value) => handleChange('committeeMembers.treasurer', value)}
            />
            {/* Additional fields for step 2 */}
            <div className='flex col justify-between'>
            <PrimaryButton text="Previous" onClick={handlePreviousStep} className='w-48   bg-[#073567] rounded-lg' />
            <PrimaryButton text="Next" onClick={handleNextStep} className='w-48  bg-[#073567] rounded-lg' />
          
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* Documents Step */}
            <p>Upload the documents in different office formats:</p>
            {/* File upload fields */}
            {/* Additional fields for step 3 */}
            <div className='flex col justify-between'>
            <PrimaryButton text="Previous" onClick={handlePreviousStep} className='w-48   bg-[#073567] rounded-lg' />
            <PrimaryButton text="Submit"   className='w-48  bg-[#073567] rounded-lg' />
          
            </div>
            
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Stack
        tokens={{ childrenGap: 20 }}
        className="max-w-2xl w-full  bg-white p-6 rounded-lg shadow"
      >
        <ProgressIndicator
          label="Create University Club"
          description={`Step ${step + 1} of 3`}
          percentComplete={(step + 1) / 3}
          styles={{
            itemName: { fontWeight: 'bold' },
            itemDescription: { fontSize: 12 },
          }}
        />
        {renderFormStep()}
      </Stack>
    </div>
  );
};

export default CreateClubForm;
