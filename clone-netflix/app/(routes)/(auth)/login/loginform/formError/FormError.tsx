import { TriangleAlert } from "lucide-react";
import { FormErrorsProps } from "./FormErrors.types";


export  function FormError(props: FormErrorsProps) {
    const { message } = props;
    if(!message) return null
  return (
    <div className="bg-destructive/50 rounded-md flex items-center gap-x-2 text-sm text-white">
<TriangleAlert />
<p>{message}</p>
    </div>
  )
}
