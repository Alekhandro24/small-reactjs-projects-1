const DataList = () => {
  const handleData = (e) => {
    e.preventDefault();
    const data = e.target.value;
    console.log(data);
  };

  return (
    <>
      <label htmlFor="card-type">Choose credit card: </label>
      <input type="text" list="card-type" />

      <datalist id="card-type" onFocus={handleData}>
        <option value="Master Card"></option>
        <option value="Visa"></option>
        <option value="American Express"></option>
      </datalist>
    </>
  );
};

export default DataList;
