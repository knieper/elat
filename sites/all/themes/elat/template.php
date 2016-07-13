<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function elat_preprocess_node(&$variables) {
  $options = array(
    'group' => JS_THEME,
  );
  if($variables['node_url'] == '/assessment-cycle' || $variables['node_url'] == '/engaged-learning/assessment-cycle'){
  	drupal_add_js(drupal_get_path('theme', 'elat'). '/js/elat_cycle.js', $options);
  	}
}

function elat_preprocess_views_view(&$variables){
  $options = array(
    'group' => JS_THEME,
  );
  if($variables['view']->name == 'showcase_browse'){
   drupal_add_js(drupal_get_path('theme', 'elat'). '/js/elat_carousel.js', $options);
  }
}
