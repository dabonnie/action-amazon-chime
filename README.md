# action-amazon-chime

[![GitHub Action Status](https://github.com/thomas-moulard/action-amazon-chime/workflows/Test%20action-amazon-chime/badge.svg)](https://github.com/thomas-moulard/action-amazon-chime)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ros-tooling/action-amazon-chime)](https://dependabot.com)


This action notifies an [Amazon Chime](https://aws.amazon.com/chime/) chatroom.

## Usage

See [action.yml](action.yml)

```yaml
steps:
- uses: ros-tooling/action-amazon-chime@master
  with:
    message: |
      [${{ github.workflow }}][${{ github.event_name }}] :white_check_mark: Test message sent by the action-amazon-chime e2e test.
      Link to GitHub Action run: https://github.com/${{ github.repository }}/commit/${{ github.sha }}/checks
    # The chat room webhook URL can be created using Chime:
    # See https://docs.aws.amazon.com/chime/latest/ug/webhooks.html
    # It is recommended to store the webhook URL as a secret, to avoid letting unknown user spam your chat room.
    # See https://help.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables
    webhook: ${{ secrets.testRoomWebHookUrl }}
```

## License

The scripts and documentation in this project are released under the [Apache 2](LICENSE)
