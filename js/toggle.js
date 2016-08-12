jQuery('.nnr-switch input').click( function()  {
	var t = jQuery( this ),
		togvalue = t.is( ':checked' ) ? 'on' : 'off',
		scriptid = t.data( 'id' ),
		data = {
			action: 'hfcm-request',
			toggle: true,
			id: scriptid,
			togvalue: togvalue,
			security: hfcm_ajax.security
		};

	jQuery.post(
		ajaxurl,
		data
	);
});