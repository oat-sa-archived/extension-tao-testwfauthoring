<!--DEPRECATED-->
<section id="item-container">
	<header>
		<h1><?=__('Authoring')?></h1>
	</header>
	<div>
        <button id='authoringButton' class="btn-info"><?=__('Edit workflow')?></button>
	</div>
</section>
<script type="text/javascript">
require(['jquery', 'helpers'], function($, helpers) {
        $('#authoringButton').click(function(e) {
                e.preventDefault();
                uri = '<?=_url('authoring', 'Process', 'wfAuthoring', array('uri' => get_data('processUri')))?>';
                //helpers.openTab('<?=get_data('label')?>', uri);
        });
});
</script>
