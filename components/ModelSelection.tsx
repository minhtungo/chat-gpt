'use client';

import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  return (
    <div className='mt-2'>
      <Select
        className='mt-2 text-gray-800 bg-gray-700/30 border-gray-700/30'
        defaultValue={model}
        placeholder={model}
        isSearchable
        options={models?.modelOptions}
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) => 'bg-gray-700/30 border-gray-700/30',
        }}
      />
    </div>
  );
};
export default ModelSelection;
