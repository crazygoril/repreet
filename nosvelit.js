   const jsonString = '{"name": "John", "age": 30}';
   try {
     const jsonObject = JSON.parse(jsonString);
     console.log('The object is JSON.');
   } catch (error) {
     console.log('The object is not JSON.');
   }
   