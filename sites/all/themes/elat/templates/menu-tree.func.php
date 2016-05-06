<?php
/**
 * @file
 * Stub file for bootstrap_menu_tree() and suggestion(s).
 */

/**
 * Returns HTML for a wrapper for a menu sub-tree.
 *
 * @param array $variables
 *   An associative array containing:
 *   - tree: An HTML string containing the tree's items.
 *
 * @return string
 *   The constructed HTML.
 *
 * @see template_preprocess_menu_tree()
 * @see theme_menu_tree()
 *
 * @ingroup theme_functions
 */
 
/* 
function elat_menu_tree(&$variables) {
  return '<ul class="menu nav">' . $variables['tree'] . '</ul>';
}
*/
/**
 * adjusting wrapper for primary menu to pull right
 */
function elat_menu_tree__primary(&$variables) {
  return '<ul class="main-menu menu nav navbar-nav pull-right">' . $variables['tree'] . '</ul>';
}

/*adjusting wrapper of custom supplementary menu*/
function elat_menu_tree__menu_supplementary(&$variables){
  return '<ul class="menu nav pull-right">' . $variables['tree'] . '</ul>';
}