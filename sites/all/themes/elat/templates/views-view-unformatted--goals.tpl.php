<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div <?php if ($classes_array[$id]) {

  	if(strpos($classes_array[$id], 'views-row-1') !== FALSE){
  		print ' class="' . $classes_array[$id] . ' active'.'"';
  		}
  		else
  		{ print ' class="' . $classes_array[$id] .'"';  } }?>>
    <div class="inner"><?php print $row; ?></div>
  </div>
<?php endforeach; ?>
