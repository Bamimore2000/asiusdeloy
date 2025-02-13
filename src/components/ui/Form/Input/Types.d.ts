export interface InputProps {
    label: string;
    required?: boolean;
    placeholder: string;
    type?: string;
    name: string;
    maxLenth?: number;
    onChange?: (value: string) => void;
}