export interface TextAreaProps {
    label: string;
    required?: boolean;
    placeholder: string;
    name: string
    onChange?: (value: string) => void;
    className?: string
}