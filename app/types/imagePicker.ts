export type ImagePickerProps = {
    imageUrl: string;
    onImageChange: (file: File) => void;
};