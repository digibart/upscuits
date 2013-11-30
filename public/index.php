<?
if (!isset($Language)) 
{
	$Language = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
	$Language = strtolower(substr(chop($Language[0]),0,2));
if ($Language == 'fr' && 'fr-be' && 'fr-fr' && 'fr-ca' && 'fr-ch' && 'fr-lu') 
{
	header("Location: fr");
}
else 
{
	header("Location: en");
}
}
?>
