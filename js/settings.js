////////////////////////////////////////////////////////////////////////////////
//
//  Gmail Reader Settings
//
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//
// Load existing settings if available
//
////////////////////////////////////////////////////////////////////////////////
function LoadSettings()
{    
    frequency.selectedIndex = 0;
    System.Gadget.onSettingsClosing = SettingsClosing;

    if (System.Gadget.Settings.read("SettingExist") == true) 
    {
        userID.value = System.Gadget.Settings.read("userName");
	    password.value = System.Gadget.Settings.read("password");
	    frequency.selectedIndex = System.Gadget.Settings.read("frequency");
    }

    self.focus;
    document.body.focus();
}
////////////////////////////////////////////////////////////////////////////////
//
// Settings page closing handler
//
////////////////////////////////////////////////////////////////////////////////
function SettingsClosing(event)
{
    if (event.closeAction == event.Action.commit)
    {
	    System.Gadget.Settings.write("userName", userID.value);
	    System.Gadget.Settings.write("password", password.value);
	    System.Gadget.Settings.write("frequency", frequency.selectedIndex);
        System.Gadget.Settings.write("SettingExist", true);
    }
    
    event.cancel = false;
}