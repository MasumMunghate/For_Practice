import { useForm } from "react-hook-form";

const Form_Validation = () => {
  
  const{handleSubmit ,onSubmit ,register ,formState: {errors} } = useForm()

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name </label>
      <input name="name" type="text" id="name" {...register("example")}/> <br />
      <label>Last Name </label>
      <input type="text"  />
      <input type="submit"  {...register({required : true})}/>
      {}
    </form>
    </>
  );
};

export default Form_Validation;

//handleSubmit will validate our input beform invoking in submit