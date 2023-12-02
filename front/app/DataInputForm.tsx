import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { store } from './store/store';
import { IUserData } from './models/profile';



const DataInputForm: React.FC = () => {
  const [formData, setFormData] = useState<IUserData>({
    // id:'',
    name: '',
    areaOfDevelopment: '',
    experienceDescription: '',
  });

  const handleChange = (field: keyof IUserData, value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Обработка отправки данных
    // Можно выполнить здесь валидацию, отправку на сервер или другие действия
    console.log('Отправленные данные:', formData);
    store.userDataStore.postUserData(formData)

    // Очистка полей после отправки
    setFormData({
      // id:'',
      name: '',
      areaOfDevelopment: '',
      experienceDescription: '',
    });

  };

  return (
    <View>
      <TextInput
        placeholder="Имя"
        value={formData.name}
        onChangeText={text => handleChange('name', text)}
      />

      <TextInput
        placeholder="Область развития"
        value={formData.areaOfDevelopment}
        onChangeText={text => handleChange('areaOfDevelopment', text)}
      />

      <TextInput
        placeholder="Описание предыдущего опыта"
        value={formData.experienceDescription}
        onChangeText={text => handleChange('experienceDescription', text)}
      />

      <Button title="Отправить" onPress={handleSubmit} />
    </View>
  );
};

export default DataInputForm;