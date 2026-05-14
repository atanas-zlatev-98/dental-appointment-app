import { ImagePickerProps } from "@/app/types/imagePicker";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function ProfilePicturePicker({ imageUrl, onImageChange}: ImagePickerProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];
    
    if (!file) return;

    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");
        e.target.value = "";
        return;

    }

    onImageChange(file);
  };

  return (

    <div className="w-30 h-30 cursor-pointer" onClick={() => inputRef.current?.click()}>
        
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange}/>

      {imageUrl ? ( <Image src={imageUrl} alt="Avatar" width={80} height={80} className="w-full h-full rounded-full object-cover"/>
      ) : (
        <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-blue-400 hover:bg-gray-200 transition-colors">
         <ImagePlus size={24} />
        </div>
      )}
    </div>
  );
}
