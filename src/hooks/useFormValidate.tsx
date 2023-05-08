import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFormValidate = ({
	mode,
}: {
	mode: 'onSubmit' | 'onBlur' | 'onChange';
}) => {
	const [send, setSend] = useState(false);
	const [mails, setMails] = useState<string[]>([]);
	const [check, setCheck] = useState(true);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode });

	const onSubmit = (data: Record<string, string>) => {
		const { email } = data;
		if (email && !mails.includes(email)) {
			setMails((prevState) => [...prevState, email]);
			setCheck(true);
		} else {
			setCheck(false);
		}
		setTimeout(() => {
			setSend(true);
		}, 500);
		reset();
	};

	return {
		send,
		errors,
		register,
		handleSubmit: handleSubmit(onSubmit),
		reset,
		check,
		setSend,
	};
};
