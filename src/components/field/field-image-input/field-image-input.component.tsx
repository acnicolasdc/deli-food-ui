'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent } from 'react';
import Image from 'next/image';
import { Cross1Icon } from '@radix-ui/react-icons';

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const dataTransfer = new DataTransfer();
  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image),
  );
  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);
  return { files, displayUrl };
}

export type TFieldImageInputValue = {
  file: FileList | null;
  preview: string;
}

export interface IFieldImageInputProps {
  onValueChange: (value: TFieldImageInputValue) => void;
  value?: TFieldImageInputValue
}

export function FieldImageInput({ value, onValueChange }: IFieldImageInputProps) {
  return (
    value?.preview ? (
      <div className='rounded-md border w-full px-4 py-3 flex flex-row gap-2 items-center'>
        <Image
          alt='selected image'
          src={value.preview}
          width={20}
          height={20}
          className='max-h-[15px]'
        />
        <Label className='font-normal'>Imagen Seleccionada</Label>
        <div className='flex flex-1 justify-end'>
          <Cross1Icon
            className='h-3 w-3 cursor-pointer'
            onClick={() => {
              onValueChange({
                file: null,
                preview: '',
              });
            }}
          />
        </div>
      </div>
    ) : (
      <div className='relative flex flex-row items-center'>
        <Input
          type='file'
          placeholder='Selecciona una foto'
          onChange={(event) => {
            if (!event.target.files?.length) return;
            const { files, displayUrl } = getImageData(event);
            onValueChange({
              file: files,
              preview: displayUrl,
            });
          }}
        />
      </div>
    )
  );
}
