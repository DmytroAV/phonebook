import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import FormControl from '@mui/joy/FormControl';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { useUpdateContactMutation } from 'redux/fetchContactsApi';
import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';

const notifyOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

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

export default function EditContactModal({ isOpen, onClose, initialValues }) {
  const [updateContact] = useUpdateContactMutation();

  const handleUpdateContact = async fields => {
    try {
      await updateContact(fields);
      onClose();
      toast.success(
        `Contact ${fields.name} has updated your phone book`,
        notifyOptions
      );
    } catch (error) {
      console.log(error);
    }
  };

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
          <DialogTitle>Edit contact</DialogTitle>
          <DialogContent>Please, Edit contact</DialogContent>
          <form onSubmit={handleSubmit(handleUpdateContact)}>
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
                      autoFocus
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
                Edit contact
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
