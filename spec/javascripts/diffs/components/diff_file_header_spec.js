    const diffDiscussionMock = getJSONFixture(discussionFixture)[0];
      expect(button.dataset.clipboardText).toBe(props.diffFile.filePath);
      it('dispatches toggleFileDiscussions when user clicks on toggle discussions button', () => {
        spyOn(vm, 'toggleFileDiscussions');

        vm.$el.querySelector('.js-btn-vue-toggle-comments').click();

        expect(vm.toggleFileDiscussions).toHaveBeenCalled();