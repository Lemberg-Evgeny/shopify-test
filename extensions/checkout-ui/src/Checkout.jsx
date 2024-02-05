import {
	Banner,
	useApi,
	useTranslate,
	reactExtension,
	Checkbox,
	Button,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
	const translate = useTranslate();
	const { extension } = useApi();

	return (
		<Banner title="Save your cart" status="info">
			<Checkbox id="checkbox" name="checkbox">
				The Videographer Snowboard
			</Checkbox>
			<Checkbox id="multi" name="checkbox">
				The Multi-location Snowboard
			</Checkbox>
			<Button 
				onPress={() => {
					console.log('onPress event');
				}}
			>
				Save
			</Button>
			{/* {translate('welcome', { target: extension.target })} */}
		</Banner>
	);
}
