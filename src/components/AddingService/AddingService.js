import axios from "axios";
import { useForm } from "react-hook-form";

const AddingService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className='mt-4 pt-4 pb-4 mb-4'>
            <div className="add-service">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("service_name", { required: true, maxLength: 20 })} placeholder="title" />
                    <textarea {...register("service_des")} placeholder="a short description" />

                    <input {...register("service_img")} placeholder="image url" />
                    <input className='add-btn' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddingService;