import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import { TextField } from '@mui/material';

const phoneRegExp = /^\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/; //format="(###) ###-##-##"

const validationSchema = yup.object({
  name: yup
    .string()
    .label('Name')
    .trim()
    .min(3, 'must be at least 3 characters long')
    .max(30, 'must be at least 10 characters long')
    .required('Name is required'),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Mobile Phone is required'),
});

export default function ModalFormContact({
  onSubmit,
  isOpen,
  onClose,
  initialValues,
  title,
  content,
}) {
  const {
    control,
    handleSubmit,
    formState,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>Please, {content}</DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormControl>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value, name } }) => (
                    <TextField
                      sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-input': {
                          textTransform: 'capitalize',
                        },
                      }}
                      type="text"
                      label="Name"
                      placeholder="Please enter Name"
                      name={name}
                      autoComplete="off"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      autoFocus
                      fullWidth
                      required
                      error={!!errors[name]}
                      helperText={errors[name] && errors[name].message}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Controller
                  name="number"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value, name } }) => (
                    <PatternFormat
                      customInput={TextField}
                      sx={{ mb: 2 }}
                      name={name}
                      type="tel"
                      label="Number"
                      format="(###) ###-##-##"
                      mask="_"
                      autoComplete="off"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      onValueChange={value => setValue(value.formattedValue)}
                      fullWidth
                      required
                      allowEmptyFormatting
                      error={!!errors[name]}
                      helperText={errors[name] && errors[name].message}
                    />
                  )}
                />
              </FormControl>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                {title}
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
