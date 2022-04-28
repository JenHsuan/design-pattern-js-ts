interface IBuilder {
    buildSettingA(): this
    buildSettingB(): this
    buildSettingC(): this
    getResult(): Setting
}

class Builder implements IBuilder {
    private setting: Setting;
    constructor() {
        this.setting = new Setting();
    }
    buildSettingA(): this {
        this.setting = Object.assign(this.setting, {
            settingA: true
        })
        return this;
    }
    buildSettingB(): this {
        this.setting = Object.assign(this.setting, {
            settingB: true
        })
        return this;
    }
    buildSettingC(): this {
        this.setting = Object.assign(this.setting, {
            settingC: true
        })
        return this;
    }
    getResult(): Setting {
        return this.setting;
    }
    
}

class Director {
    static construct() {
        return new Builder()
                .buildSettingA()
                .buildSettingB()
                .buildSettingC()
                .getResult()
    }
}

class Setting {
    settingA: boolean = false;
    settingB: boolean = false;
    settingC: boolean = false;
}

console.log(Director.construct())
//will print: Setting { settingA: true, settingB: true, settingC: true }